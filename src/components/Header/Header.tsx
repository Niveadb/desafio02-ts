import './Header.css'

export const Header  = () => {
  return(
    <header className='header'>
      <img className='header__logo' src='/logo_diobank.png' alt='Dio Bank logo' />
      <span className='header__title'>Dio Bank</span>
    </header>
  )
}
