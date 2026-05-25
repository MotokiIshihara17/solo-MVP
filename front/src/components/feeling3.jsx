import { useEffect } from "react";

export function Feeling3({ feel3, setFeel3 }) {
  const runOk = "/marathon.png";
  const runMid = "/running.png";
  const runHigh = "/necchuusyou.png";
  const runStop = "/kyuukyuusya_hansou.png";

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const res = await fetch(
          "https://weather.tsukumijima.net/api/forecast/city/230010",
        );
        const data = await res.json();
        const today = data.forecasts[2].temperature.max;
        const celsius = Number(today.celsius);
        const fahrenheit = Number(today.fahrenheit);
        console.log("湿度", fahrenheit);
        console.log("温度", celsius);

        if (celsius < 24) {
          setFeel3(runOk);
        }

        if (celsius >= 24 && celsius < 27) {
          if (fahrenheit >= 90) {
            //runImage = "熱中症危険度中";
            setFeel3(runMid);
          } else {
            //runImage = "ランニング日和";
            setFeel3(runOk);
          }
        }

        if (celsius >= 27 && celsius < 29) {
          if (fahrenheit >= 60 && fahrenheit < 90) {
            //runImage = "熱中症危険度中";
            setFeel3(runMid);
          } else if (fahrenheit >= 90) {
            //runImage = "熱中症危険度高";
            setFeel3(runHigh);
          } else {
            //runImage = "ランニング日和";
            setFeel3(runOk);
          }
        }

        if (celsius >= 29 && celsius < 32) {
          if (fahrenheit >= 30 && fahrenheit < 60) {
            //runImage = "熱中症危険度中";
            setFeel3(runMid);
          } else if (fahrenheit >= 60) {
            //runImage = "熱中症危険度高";
            setFeel3(runHigh);
          } else {
            //runImage = "ランニング日和";
            setFeel3(runOk);
          }
        }

        if (celsius >= 32 && celsius < 35) {
          if (fahrenheit >= 10 && fahrenheit < 50) {
            //runImage = "熱中症危険度中";
            setFeel3(runMid);
          } else if (fahrenheit >= 50 && fahrenheit < 70) {
            //runImage = "熱中症危険度高";
            setFeel3(runHigh);
          } else if (fahrenheit >= 70) {
            //runImage = "熱中症確定";
            setFeel3(runStop);
          } else {
            //runImage = "ランニング日和";
            setFeel3(runOk);
          }
        }

        if (celsius >= 35 && celsius < 38) {
          if (fahrenheit >= 0 && fahrenheit < 40) {
            //runImage = "熱中症危険度中";
            setFeel3(runMid);
          } else if (fahrenheit >= 40 && fahrenheit < 60) {
            //runImage = "熱中症危険度高";
            setFeel3(runHigh);
          } else if (fahrenheit >= 60) {
            //runImage = "熱中症確定";
            setFeel3(runStop);
          }
        }

        if (celsius >= 38 && celsius < 41) {
          if (fahrenheit >= 0 && fahrenheit < 20) {
            //runImage = "熱中症危険度中";
            setFeel3(runMid);
          } else if (fahrenheit >= 20 && fahrenheit < 50) {
            //runImage = "熱中症危険度高";
            setFeel3(runHigh);
          } else if (fahrenheit >= 50) {
            //runImage = "熱中症確定";
            setFeel3(runStop);
          }
        }

        if (celsius >= 41 && celsius < 43) {
          if (fahrenheit >= 0 && fahrenheit < 10) {
            //runImage = "熱中症危険度中";
            setFeel3(runMid);
          } else if (fahrenheit >= 10 && fahrenheit < 40) {
            //runImage = "熱中症危険度高";
            setFeel3(runHigh);
          } else if (fahrenheit >= 40) {
            //runImage = "熱中症確定";
            setFeel3(runStop);
          }
        }
      } catch {
        console.error("エラー");
      }
    };

    fetchUrl();
  }, []);

  if (!feel3) {
    return <div>データを取得中...</div>;
  }
  return (
    <>
      <h3 className="date">
        明後日
        <img className="feel" src={feel3} alt="ランニング判断"></img>
      </h3>
    </>
  );
}
