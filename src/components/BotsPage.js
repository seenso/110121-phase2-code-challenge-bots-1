import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const url = "http://localhost:8002/bots";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch(url).then(r => r.json()).then(data => setBots(data));
  }, []);

  function enlistBot(bot) {
    if(botArmy.find(b => b.id === bot.id)) {
      return;
    }
    setBotArmy([...botArmy, {...bot, enlisted: true}]);
  };

  function releaseBot(bot) {
    let newBotArmy = botArmy.map(b => b.id === bot.id ? bot.enlisted = false : b);
    setBotArmy(newBotArmy)
  };

  function dischargeBot(bot) {
    //remove from bot roster
    setBots(bots.filter(b => b.id !== bot.id));

    //remove from botArmy roster
    setBotArmy(botArmy.filter(b => b.id !== bot.id));
  };

  return (
    <div>
      <YourBotArmy botArmy={botArmy.filter(b => b.enlisted)} handleClick={releaseBot} dischargeBot={dischargeBot}/>
      <BotCollection bots={bots} handleClick={enlistBot} dischargeBot={dischargeBot}/>
    </div>
  )
}

export default BotsPage;