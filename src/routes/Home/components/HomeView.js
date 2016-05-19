import React from 'react'
import DatasummaryImage from '../assets/data_summary.png'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>老板报表</h4>
    <img
      alt='This is a fake data image!'
      className={classes.data_summary}
      src={DatasummaryImage} />
    <div className={classes.data_option_row}>
      <button className={classes.option_row_btn}>所有门店</button>
      <button className={classes.option_row_btn}>今天</button>
    </div>
    <div className={classes.long_block +" "+classes.blue_background}>门店营收</div>
    <div className={classes.short_block}>预估材料成本</div>
    <div className={classes.short_block}>预估毛料利</div>
    <div className={classes.long_block +" "+classes.darkolivegreen_background}>挂账收款</div>
  </div>
)

export default HomeView
