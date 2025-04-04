function Header(props) {  // "component"를 사용하기 + props 사용
  return (
    <header classname="navbar">  {/* 상단 네비게이션 */}
      <h1 className="site-name">{props.title}</h1>
      <div className="menu">
        <div className="menu-box"></div>
        <div className="menu-box"></div>
        <div className="menu-box"></div>
      </div>
    </header>
  )
}

export default Header;   // App.jsx에서 쓰려면 export
