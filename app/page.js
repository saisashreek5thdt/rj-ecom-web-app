import Footer from "./(Components)/Common/Footer";
import Header from "./(Components)/Common/Header";
import AboutUS2 from "./(Components)/Home/AboutUS2";
import CircularText from "./(Components)/Home/CircularText";
import GlobalBrand from "./(Components)/Home/GlobalBrand";
import Hero from "./(Components)/Home/Hero";
import InstagramZoomIn from "./(Components)/Home/InstagramZoomIn";
import RecentProducts from "./(Components)/Home/RecentProducts";
import ReviewRating from "./(Components)/Home/ReviewRating";
import ReviewsAndRatings from "./(Components)/Home/ReviewsAndRatings";
import ShippingInfo from "./(Components)/Home/ShippingInfo";

export default function Home() {
  return (
    <div className="bg-stone-950 text-white w-full min-h-screen overflow-x-hidden select-none">
      <Header />
      <main>
        <Hero/>
        <CircularText />
        <GlobalBrand />
        <AboutUS2 />
        <RecentProducts />
        <ReviewRating/>
        {/* <ReviewsAndRatings /> */}
        <ShippingInfo />
        <InstagramZoomIn/>
      </main>
      <Footer />
    </div>
  );
}
