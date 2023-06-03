import React from "react";
import Review from "../components/review";
import ReviewForm from "../components/add-review-form";
import "./home-screen.css";
import AppHeader from "../components/app-header";
import axiosFetch from "../hooks/fetch-api";
export default function ReviewsScreen() {
  const [reviews, setReviews] = React.useState(null);

  React.useEffect(() => {
    const load = async () => {
      const response = await axiosFetch("http://localhost:5000/reviews", "get");
      setReviews(response.response);
    };
    load();
  }, []);
  return (
    <div>
      <AppHeader
        title="Users Reviews"
        content="Dear Clients, here you can find other users reviews, you can also
              add your own"
      />
      <section className="py-5">
        <ReviewForm />
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {reviews ? (
              reviews.map((review) => (
                <Review
                  user={review.owner.mail}
                  comment={review.comment}
                  date={new Date(review.createdAt).toLocaleDateString()}
                />
              ))
            ) : (
              <p className="loading">loading reviews, please wait ...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
