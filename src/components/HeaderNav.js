import Logo from './Logo';
import SearchBar from './SearchBar';
import Button from './UploadButton';
import upload from '../components/images/upload.svg';

function HeaderNav() {
  return (
    <>
      <Logo />
      <SearchBar />
      <Button name='Upload' img={upload}/>
    </>
  );
}

export default HeaderNav;