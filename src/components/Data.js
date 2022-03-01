import React from 'react'
import CountUp from 'react-countup'
import svgIcon from '../svg/icon-ellipsis.svg'

const timeData = require('../data/data.json')

const Data = ({ dataType }) => {
    const setByCat = (cat) => cat.replace(/\s/g, '').toLowerCase()

    return (
        <section className='wrapper'>
            {timeData.map((data, index) => {

                const getFrames = (dataType) => {
                    if (dataType === -1) return data.timeframes.daily
                    else if (dataType === 0) return data.timeframes.weekly
                    else if (dataType === 1) return data.timeframes.monthly
                }
                const timeframes = getFrames(dataType)
                const title = data.title

                return (
                    <div key={index} className={`main-data-viewer ${setByCat(data.title)}`}>
                        <div className='data-box'>
                            <div className='header'>
                                <span>{title}</span>
                                <span><img className='menu-icon' src={svgIcon} alt="menu icon" /></span>
                            </div>
                            <div className='timeframes'>
                                <div className='current-timeframe'>
                                    <CountUp
                                        start={0}
                                        end={timeframes.current}
                                        duration={1.5}
                                        separator={','}
                                        suffix={"hrs"}
                                    />
                                </div>
                                <div className='previous-timeframe'>
                                    Last Week - <CountUp
                                        start={0}
                                        end={timeframes.previous}
                                        duration={1.5}
                                        separator={','}
                                        suffix={"hrs"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Data