import React, { useContext, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Grow,
  TextField,
  Button,
  Typography,
  CardContent,
  Card,
  CardActionArea,
} from "@mui/material";
import classNames from "classnames";
import { DialogContext } from "../../wrappers/Dialog";
import PropertyDetails from "./PropertyDetails";
import Stack from "../Stack";
import Slideshow from "../Slideshow";
import style from "./PromotedListingCard.module.css";

// Mock data for listings and requests
const mockedListing = {
  id: "1",
  images: [
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200/ff0000",
    "https://via.placeholder.com/400x200/00ff00",
  ],
  location_name: "Downtown Dubai",
  propertyType: "Apartment",
  price: 1500000,
  bedrooms: 2,
  bathrooms: 2,
  size: 1500,
  brokerUid: "broker123",
};

const mockedRequest = {
  id: "req1",
  promoted_listing_resp: {
    1: "msg123",
  },
};

const FeatureText = ({ text, caption }) => {
  return (
    <Stack direction="column">
      <Typography variant="body2" color="text.secondary">
        {text}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {caption}
      </Typography>
    </Stack>
  );
};

export function PromotedListingCard() {
  const [_isDialogOpen, setIsDialogOpen] = useState(false);
  const [_isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
  const [_isChatDialogOpen, setChatDialogOpen] = useState(false);
  const { addPopup } = useContext(DialogContext);

  const [message, setMessage] = useState({
    listing: {},
    body: "",
    clientUid: null,
    brokerUid: null,
    requestId: null,
  });
  const [messageId, setMessageId] = useState(false);
  const [chatButtontext, setChatButtonText] = useState("Connect with broker");

  const handleMessageChange = (e) => {
    setMessage({ ...message, body: e.target.value });
  };

  const handleCloseMessageBox = () => {
    setIsMessageBoxOpen(false);
  };

  const handleOpenDialog = () => {
    addPopup({
      content: <PropertyDetails mockedListing={mockedListing} />,
    });
  };

  const handleOpenMessageBox = () => {
    setMessage({
      attachedListing: mockedListing,
      clientUid: "client123",
      brokerUid: mockedListing.brokerUid,
      senderUid: "client123",
      requestId: mockedRequest.id,
    });
    addPopup({
      title: "Responding to broker",
      content: (
        <>
          <TextField
            label="Message"
            variant="filled"
            fullWidth
            multiline
            rows={4}
            value={message.body}
            onChange={handleMessageChange}
            sx={{
              "& .MuiFilledInput-underline:after": {
                borderColor: "darkgoldenrod",
              },
              "& .MuiInputLabel-root": {
                color: "darkgoldenrod",
              },
              "& .MuiInputLabel-filled.Mui-focused": {
                color: "darkgoldenrod",
              },
              minWidth: "150px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                width: "50%",
                mr: 1,
                color: "darkgoldenrod",
                borderColor: "darkgoldenrod",
                "&:hover": {
                  border: "none",
                  backgroundColor: "#C29600",
                  color: "white",
                },
              }}
              variant="outlined"
              onClick={handleSend}
            >
              Send
            </Button>
            <Button
              sx={{
                width: "50%",
                mr: 1,
                color: "darkgoldenrod",
                borderColor: "darkgoldenrod",
                "&:hover": {
                  border: "none",
                  backgroundColor: "#C29600",
                  color: "white",
                },
              }}
              variant="outlined"
              onClick={handleCloseMessageBox}
            >
              Cancel
            </Button>
          </div>
        </>
      ),
    });
  };

  const handleOpenMessageDialog = () => {
    addPopup({
      content: (
        <Typography variant="h6">
          Chat component with message ID: {messageId}
        </Typography>
      ),
    });
  };

  const handleCloseMessageDialog = () => {
    setChatDialogOpen(false);
  };

  const connectWithBrokerAction = () => {
    if (
      mockedRequest.promoted_listing_resp &&
      mockedRequest.promoted_listing_resp.hasOwnProperty(mockedListing.id)
    ) {
      setMessageId(mockedRequest.promoted_listing_resp[mockedListing.id]);
      setChatButtonText("Messages");
      handleOpenMessageDialog();
    } else {
      handleOpenMessageBox();
      setChatButtonText("Message Broker");
    }
  };

  const handleSend = async () => {
    setIsMessageBoxOpen(false);
    setMessage({});
    console.log("Message sent:", message);
    // Mock sending message
    setMessageId("msg123");
    setChatButtonText("Messages");
    handleOpenMessageDialog();
  };

  return (
    <Stack fullWidth className={style.ListingCardContainer}>
      <Stack>This property has been verified by Aaqaraty team</Stack>
      <Slideshow images={mockedListing.images} />
      <p>{mockedListing.location_name}</p>
      <Stack>
        <FeatureText text="400m2" caption="SIZE" />
      </Stack>
    </Stack>
  );
}

export default PromotedListingCard;
