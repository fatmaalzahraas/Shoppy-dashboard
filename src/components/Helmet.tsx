import { useEffect } from "react";
import { useLocation } from "react-router-dom";
type HelmetProps = {
  title: string;
  children: React.ReactNode;
};
const Helmet = ({ title, children }: HelmetProps) => {
  const location = useLocation();
  useEffect(() => {
    document.title = location.pathname === "/" ? "Shoppy" : `${title} | Shoppy`;
  }, [location.pathname, title]);

  return <div>{children}</div>;
};

export default Helmet;
