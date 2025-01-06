export default function LoadingScreen({ progress }: { progress: number }) {
  return (
    <div className="text-[rgba(255,255,255,0.3)] font-mono text-sm">
      {progress}%
    </div>
  )
}

