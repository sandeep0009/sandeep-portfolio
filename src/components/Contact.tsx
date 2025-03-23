export function Contact() {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-lg">Want to talk? Just ping me!</p>
  
        <div className="mt-4 flex flex-col items-center gap-2">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
  
          <a
            href="mailto:your@email.com"
            className="text-blue-500 hover:underline"
          >
            Email
          </a>
  
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
  