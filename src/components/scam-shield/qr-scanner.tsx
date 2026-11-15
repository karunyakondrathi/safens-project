import { useEffect, useRef, useState } from "react";
import { Camera, CameraOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { UiCopy } from "@/lib/ui-copy";

interface Props {
  onResult: (text: string) => void;
  copy: UiCopy;
}

export function QrScanner({ onResult, copy }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  type JsQR = (data: Uint8ClampedArray, w: number, h: number) => { data: string } | null;
  const jsQRRef = useRef<JsQR | null>(null);

  const [active, setActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const stop = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setActive(false);
  };

  useEffect(() => stop, []);

  const start = async () => {
    setError(null);
    setLoading(true);
    try {
      if (!jsQRRef.current) {
        const mod = await import("jsqr");
        jsQRRef.current = mod.default as unknown as JsQR;
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setActive(true);
      tick();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Camera failed to start");
    } finally {
      setLoading(false);
    }
  };

  const tick = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const jsQR = jsQRRef.current;
    if (!video || !canvas || !jsQR || video.readyState !== 4) {
      rafRef.current = requestAnimationFrame(tick);
      return;
    }
    const w = video.videoWidth;
    const h = video.videoHeight;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.drawImage(video, 0, 0, w, h);
    const img = ctx.getImageData(0, 0, w, h);
    const code = jsQR(img.data, w, h);
    if (code && code.data) {
      stop();
      onResult(code.data);
      return;
    }
    rafRef.current = requestAnimationFrame(tick);
  };

  return (
    <div className="space-y-3">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-foreground">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          playsInline
          muted
        />
        <canvas ref={canvasRef} className="hidden" />
        {!active && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
            <Camera className="h-14 w-14 text-background" />
            <p className="text-base font-bold text-background">{copy.readyScan}</p>
          </div>
        )}
        {active && (
          <div className="pointer-events-none absolute inset-8 rounded-2xl border-2 border-primary/80 shadow-[0_0_0_9999px_rgba(0,0,0,0.35)]" />
        )}
      </div>

      {error && <p className="text-sm text-danger">{error}</p>}

      <div className="flex gap-2">
        {!active ? (
          <Button onClick={start} disabled={loading} className="h-14 flex-1 rounded-xl text-lg" size="lg">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Camera className="mr-2 h-4 w-4" />}
            {copy.scanQr}
          </Button>
        ) : (
          <Button onClick={stop} variant="secondary" className="flex-1" size="lg">
            <CameraOff className="mr-2 h-4 w-4" />
            {copy.stop}
          </Button>
        )}
      </div>
      <p className="text-center text-sm text-muted-foreground">{copy.qrPrivate}</p>
    </div>
  );
}