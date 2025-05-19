import Footer from "./(Components)/Common/Footer";
import Header from "./(Components)/Common/Header";
import AboutUS from "./(Components)/Home/AboutUS";
import GlobalBrand from "./(Components)/Home/GlobalBrand";
import RecentProducts from "./(Components)/Home/RecentProducts";
import ReviewsAndRatings from "./(Components)/Home/ReviewsAndRatings";

export default function Home() {
  return (
    <div className="bg-stone-950 text-white w-full min-h-screen overflow-x-hidden">
      <Header/>
      <main>
        <GlobalBrand/>
        <RecentProducts/>
        <ReviewsAndRatings/>
        <AboutUS />
      </main>
      <Footer />
    </div>
  );
}
