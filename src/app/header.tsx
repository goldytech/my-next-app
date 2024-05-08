import Image from "next/image";
export default function Header() {
  return (
    <div className="hero py-4 mt-2 header-footer-gradient home-rounded-corners-top-left">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center justify-content-between">
          {/* Logo Section */}
          <div className="col-lg-6 text-lg-end">
            <Image
              src="/images/next.svg"
              alt="SVCC Logo"
              width={100}
              height={100}
            />
            <h2>
              <span className="text-black">My NextJs App</span>
            </h2>
          </div>
          <div className="col-lg-6 text-lg-start mt-3 mt-lg-0">
              <h6 className="text-uppercase text-black-50">
              Developed by: <span className="text-black">goldytech</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
