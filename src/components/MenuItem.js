import PropTypes from 'prop-types'
const MenuItem = ({title,active,onClick}) => {
  return (
      <li>
          <a onClick={()=>{
              onClick(title)
          }}  className={`block cursor-pointer border-0 py-2 pr-4 pl-3 ${active ? 'text-gray-200' : 'text-gray-500'} hover:text-blue-800`}>
              {title}
          </a>
      </li>
  )
}

MenuItem.propTypes = {
    title:PropTypes.string,
    active:PropTypes.bool,
    onclick:PropTypes.func
}
MenuItem.defaaultProps = {
    title:"Test Title",
    active:false,
    onclick:() => null
}

export default MenuItem