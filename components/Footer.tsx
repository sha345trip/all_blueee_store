

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center bg-blue-200'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img 
            src="./copyright.png"
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.All Blue</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions &copy;2024</p>
      </div>
    </footer>
  );
};

export default Footer;