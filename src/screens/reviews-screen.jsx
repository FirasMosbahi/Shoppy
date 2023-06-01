import React from "react";
import Review from "../components/review";
import ReviewForm from "../components/add-review-form";
import "./home-screen.css";
export default function ReviewsScreen() {
  const [reviews, setReviews] = React.useState(null);
  const fetchReviews = async () => {
    //TODO:handle fetching reviews
  };
  React.useEffect(() => {});
  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Users Reviews</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Dear Clients, here you can find other users reviews, you can also
              add your own
            </p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <ReviewForm />
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {reviews ? (
              reviews.map((review) => (
                <Review
                  user={review.user}
                  comment={review.comment}
                  date={review.date}
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
