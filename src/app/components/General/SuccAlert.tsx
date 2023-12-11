import { Player } from "@lottiefiles/react-lottie-player";
import { useTheme } from "@mui/material/styles";
import animationData from "../../../../public/assets/animation/check.json";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const SuccAlert = ({ sText, onClose, floatType }: any) => {
  const theme = useTheme();
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      className={`${
        floatType == 1 ? "relative pb-9" : "top-0 left-0 absolute h-full"
      } w-full z-50  flex items-center justify-center`}
      style={{
        color: theme.palette.success.main,
      }}
    >
      <div className="text-center -mt-6 flex justify-center flex-col items-center w-full">
        {/* <CheckCircleTwoToneIcon
          sx={{
            fontSize: 160,
          }}
        /> */}
        {/* <Lottie
          loop={false}
          animationData={animationData}
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          play
          style={{ width: 250, height: 250 }}
        /> */}
        {!isDone && (
          <Player
            autoplay
            loop={false}
            onEvent={(e) => {
              if (e == "pause") {
                setIsDone(true);
              }
            }}
            src={animationData}
            style={{ height: "192px", width: "300px" }}
          >
            {/* <Controls
            visible={true}
            buttons={["play", "repeat", "frame", "debug"]}
          /> */}
          </Player>
        )}

        <div className={`${isDone ? "mt-[60px]" : "-mt-[30px]"} `}>
          <h3
            className={`${
              isDone ? "vm-h3 text-[#fff] px-[4%]" : "text-white"
            } opacity-70 font-semibold text-lg transition-all duration-[.3s]`}
            style={{
              letterSpacing: "normal !important",
            }}
          >
            {sText}
          </h3>
          <div className="mt-6 px-[30%]">
            <Button
              type="button"
              color="primary"
              onClick={onClose}
              className="block bg-[#907e7e] h-[50px] disabled:cursor-not-allowed disabled:opacity-40"
              fullWidth
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccAlert;
