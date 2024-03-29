import './globals.css'
import styles from './layout.module.css'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <aside className={styles.container_aside}>
          <nav>
            <ul className={styles.container_list}>
              <li>Alertas</li>
            </ul>
          </nav>
        </aside> */}
    
      <div style={{
        flex:1
      }}>
        <header className={styles.containerHeader}>
          SIEM
        </header>
      {children}
      </div>
        </body>
    </html>
  )
}
