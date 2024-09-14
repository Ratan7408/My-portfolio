// @flow strict
import Link from 'next/link';

function Footer() {
  const style = {
    fontFamily: 'Hind, sans-serif'
  };
  return (
    <div className="relative border-t bg-gradient-to-r from-[#0d1224] border-[#353951] text-white" style={style}>
      <div className="container mx-auto px-6 sm:px-12 py-10 lg:py-16">

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Portfolio Developed by <Link target="_blank" href="https://www.linkedin.com/in/ratan-srivastav-747b20241/" className="text-[#16f2b3] hover:text-[#0fa287] transition-colors">Ratan Srivastav</Link>
          </p>
          <p className="text-xs text-gray-400 mt-2">Built with ❤️ using React.js and Next.js</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
