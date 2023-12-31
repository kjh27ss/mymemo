import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { FcGraduationCap } from 'react-icons/fc'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="container">
            <header className="text-center py-3 border-bottom">
                <FcGraduationCap className="logo" />
            </header>
            <div className="row">
              {children}
            </div>   
        </div>
      </body>
    </html>
  )
}
