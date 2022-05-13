import Logo from "./Logo";
import MenuItem from "./MenuItem";
import {useState} from "react";
import PropTypes from "prop-types";

const Header = ({activeTitle,onMenuChange}) => {
    const [_activeTitle,setActiveTitle] = useState(activeTitle);
    const [menuItems] = useState([
        {
            title:'Countries Data',
            value:1
        },
        {
            title:'Total Data',
            value:2
        },
        {
            title:'Continent Data',
            value:3
        }
    ])
  return (
      <nav className='bg-gray-800 border-gray-200 px-2'>
            <div className='container flex flex-wrap items-center justify-between mx-auto'>
                <Logo />
                <div className='w-auto block'>
                    <ul className='flex flex-row font-medium'>
                        {menuItems.map((item)=>{
                            return(
                                <MenuItem key = {item.title} active={item.title===_activeTitle} onClick={(title) => {
                                    setActiveTitle(title)
                                    onMenuChange(item.value)
                                }} title={item.title}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
      </nav>
  )
}
Header.propTypes = {
    activeTitle: PropTypes.string,
    onMenuChange: PropTypes.func
}
Header.defaultProps = {
    activeTitle: "Ölkələrə görə",
    onMenuChange: ()=>null
}
export default Header