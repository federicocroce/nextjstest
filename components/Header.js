import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/aboutSinFramework">
        <a style={linkStyle}>aboutSinFramework</a>
      </Link>
      <Link href="/aboutSinFuncion">
        <a style={linkStyle}>aboutSinFuncion</a>
      </Link>
      <Link href="/aboutFunction">
        <a style={linkStyle}>aboutFunction</a>
      </Link>
      <Link href="/aboutConst">
        <a style={linkStyle}>aboutConst</a>
      </Link>
      <Link href="/aboutLodeable">
        <a style={linkStyle}>aboutLodeable</a>
      </Link>
      <Link href="/home">
        <a style={linkStyle}>HOME</a>
      </Link>
    </div>
  )
}
