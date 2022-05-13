import PropTypes from 'prop-types'
const Logo = ({logo,title}) => {
  return (
    <div className='flex items-center'>
      <img src={logo} alt={title} className='mr-3 h-6' />
      <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>{title}</span>
    </div>
  )
}

Logo.propTypes = {
  logo:PropTypes.string,
  title:PropTypes.string
}

Logo.defaultProps = {
  title:"Corona App",
  logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhvuu1IzGSlS3UC24gSA3jof27C5YXVlekQ&usqp=CAU"
}
export default Logo