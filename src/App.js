import "./App.css";
import PromotedListingCard from "./components/PromotedListingCard";
import Wrapper from "./wrappers";

export default function App() {
  return (
    <div className="App">
      <Wrapper>
        <PromotedListingCard />
      </Wrapper>
    </div>
  );
}
