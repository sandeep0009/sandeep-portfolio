export function Contact() {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-lg">Want to talk? Just ping me!</p>
  
        <div className="mt-4 flex justify-center items-center gap-2">
          <a
            href="https://x.com/02___sandeep"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
  
          <a
            href="mailto:500sandeepks@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Email
          </a>
  
          <a
            href="https://www.linkedin.com/in/sandeep-kumar-shah-915a34255/"
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
  