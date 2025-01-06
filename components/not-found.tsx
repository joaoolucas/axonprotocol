export function NotFound() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4">
        <h1 className="text-2xl font-semibold text-white">
          Page not found
        </h1>
        <p className="text-gray-400">
          Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t exist on this site.
        </p>
        <p className="text-gray-400">
          If this is your site, and you weren&apos;t expecting a 404 for this path, please visit Netlify&apos;s{" "}
          <a 
            href="https://docs.netlify.com/routing/redirects/redirect-options/"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            &quot;page not found&quot; support guide
          </a>{" "}
          for troubleshooting tips.
        </p>
      </div>
    </div>
  )
}

