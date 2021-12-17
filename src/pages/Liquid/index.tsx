import React, { useState } from "react";
import AutoWave from "component/Liquid/wave/AutoWave";
import ClickWave from "component/Liquid/wave/ClickWave";

import style from "./index.module.less";
import { colorForm } from "static/colorForm";

const Liquid = () => {
  const [color, setColor] = useState(colorForm.red);

  const changeColor = (e: { target: any; }) => {
    const item = e.target;
    const colorName: string | null = item.getAttribute("color-name");
    if (!colorName) return;
    setColor(colorForm[colorName]);
  };

  return (
    <div className={style.liquidContainer}>
      <div className={style.liquidHeader}>
        <AutoWave color={color} />
      </div>
      <div className={style.content}>
        <div className={style.contentHeader}>
          <div className={style.colorTitle}>Try to click me!</div>
          <div className={style.colorForm}
               onClick={(e: { target: any }) => changeColor(e)}>
            <div className={style.colorItem}
                 style={{ backgroundColor: colorForm.red }}
                 color-name={"red"} />
            <div className={style.colorItem}
                 style={{ backgroundColor: colorForm.blue }}
                 color-name={"blue"} />
            <div className={style.colorItem}
                 style={{ backgroundColor: colorForm.green }}
                 color-name={"green"} />
          </div>
        </div>
        <div className={style.contentBody}>
          <ClickWave color={color} />
        </div>
      </div>
    </div>
  );
};

export default Liquid;
