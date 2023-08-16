import Logo from './Logo';
import SearchBar from './SearchBar';
import Button from './UploadButton';
import upload from '../components/images/upload.svg';

function HeaderNav() {
  return (
    <div className='Header__Nav'>
      <Logo />
      <SearchBar />
      <div className="Button">
        <Button  name='Upload' img={upload}/>
      </div>
    </div>
  );
}

export default HeaderNav;