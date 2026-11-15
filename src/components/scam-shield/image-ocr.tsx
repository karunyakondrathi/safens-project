
import { useRef, useState } from "react";
import { ImageUp, Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { UiCopy } from "@/lib/ui-copy";

interface Props {
  onText: (text: string) => void;
  copy: UiCopy;
}

export function ImageOcr({ onText, copy }: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Extract QR content embedded inside the uploaded image
  const readQrFromImage = async (
    selectedFile: File
  ): Promise<string | null> => {
    const jsQRModule = await import("jsqr");
    const jsQR = jsQRModule.default;

    const imageUrl = URL.createObjectURL(selectedFile);

    try {
      const img = new Image();
      img.src = imageUrl;

      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Image could not be loaded"));
      });

      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d", {
        willReadFrequently: true,
      });

      if (!ctx) return null;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const result = jsQR(
        imageData.data,
        canvas.width,
        canvas.height,
        { inversionAttempts: "attemptBoth" }
      );

      return result?.data ?? null;
    } finally {
      URL.revokeObjectURL(imageUrl);
    }
  };

  const checkImage = async () => {
    if (!file) return;

    setError(null);
    setBusy(true);
    setProgress(0);

    try {
      const Tesseract = (await import("tesseract.js")).default;

      // Step 1: Extract readable text
      const { data } = await Tesseract.recognize(
        file,
        "eng",
        {
          logger: (m) => {
            if (m.status === "recognizing text") {
              setProgress(Math.round(m.progress * 100));
            }
          },
        }
      );

      const extractedText = data.text?.trim() ?? "";

      // Step 2: Detect QR code inside the image
      let qrContent: string | null = null;

      try {
        qrContent = await readQrFromImage(file);
      } catch (qrError) {
        console.warn("QR image scan failed:", qrError);
      }

      // Step 3: Combine OCR and QR results
      const combinedText = [
        extractedText,
        qrContent ? `QR CODE CONTENT: ${qrContent}` : "",
      ]
        .filter(Boolean)
        .join("\n\n");

      // Step 4: Send combined content for scam analysis
      onText(combinedText);

    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Image analysis failed"
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-3">
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const selected = e.target.files?.[0];

          if (!selected) return;

          setFile(selected);
          setPreview(URL.createObjectURL(selected));
          setError(null);
        }}
      />

      <div
        onClick={() => !busy && fileRef.current?.click()}
        className="flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-background text-muted-foreground transition-colors hover:border-primary"
      >
        {preview ? (
          <img
            src={preview}
            alt="Uploaded image preview"
            className="h-full w-full rounded-2xl object-contain"
          />
        ) : (
          <>
            <ImageUp className="h-12 w-12 text-primary" />
            <p className="text-base font-bold text-foreground">
              {copy.chooseImage}
            </p>
            <p className="px-4 text-center text-sm">
              {copy.imageKinds}
            </p>
          </>
        )}
      </div>

      {busy && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          {copy.readingImage}… {progress}%
        </div>
      )}

      {error && (
        <p className="text-sm text-danger">{error}</p>
      )}

      <Button
        variant="outline"
        className="h-12 w-full rounded-xl text-base"
        onClick={() => fileRef.current?.click()}
        disabled={busy}
      >
        <ImageUp className="h-5 w-5" />
        {copy.chooseImage}
      </Button>

      <Button
        className="h-14 w-full rounded-xl text-lg"
        onClick={checkImage}
        disabled={!file || busy}
      >
        {busy ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Search className="h-5 w-5" />
        )}
        {busy
          ? `${copy.checking}… ${progress}%`
          : copy.checkImage}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        {copy.imagePrivate}
      </p>
    </div>
  );
}
