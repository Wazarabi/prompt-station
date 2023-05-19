import '@styles/globals.css';

export const metadata = {
    title: 'Prompt Nation',
    description: 'Discover the best AI prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;