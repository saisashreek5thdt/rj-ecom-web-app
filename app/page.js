import Footer from "./(Components)/Common/Footer";
import Header from "./(Components)/Common/Header";
import AboutUS2 from "./(Components)/Home/AboutUS2";
import GlobalBrand from "./(Components)/Home/GlobalBrand";
import RecentProducts from "./(Components)/Home/RecentProducts";
import ReviewsAndRatings from "./(Components)/Home/ReviewsAndRatings";
import ShippingInfo from "./(Components)/Home/ShippingInfo";

export default function Home() {
  return (
    <div className="bg-stone-950 text-white w-full min-h-screen overflow-x-hidden select-none">
      <Header />
      <main>
        <GlobalBrand />
        <AboutUS2 />
        <RecentProducts />
        <ReviewsAndRatings />
        <ShippingInfo />
      </main>
      <Footer />
    </div>
  );
}
