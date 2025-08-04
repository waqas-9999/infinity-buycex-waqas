import Usdt from "../../assets/img/usdt.png";
import winner from "../../assets/img/winner.png";

export function Leaderboard() {
    const players = [
        { rank: 1, name: "Player Name", stars: 5, amount: "50", score: 2980, medal: "🥇" },
        { rank: 2, name: "Player Name", stars: 4, amount: "25", score: 2721, medal: "🥈" },
        { rank: 3, name: "Player Name", stars: 4, amount: "10", score: 2579, medal: "🥉" },
        { rank: 4, name: "Player Name", stars: 3, amount: "5", score: 1874, medal: null },
    ]

    const StarRating = ({ stars }) => {
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <div
                        key={star}
                        className="w-4 h-4"
                        style={{
                            color: star <= stars ? "#f6921b" : "#6b7280", // gray-500
                        }}
                    >
                        ★
                    </div>
                ))}
            </div>
        )
    }

    return (
        <>
            <div className="chewy-regular mx-auto bg-white p-2 relative overflow-hidden">
                <div className="relative z-10 w-full max-w-xl">
                    <div className="flex items-center ">
                        <img src={winner} alt="Winner" className="w-16 h-[3rem]" />
                        <h1 className="text-2xl">Weekly <span className="text-[#bf2917]">Winners</span></h1>
                    </div>
                    {/* Header */}
                    <div className="text-center relative z-10 top-4">
                        <div
  className="inline-block bg-[#f6921b] rounded-2xl px-8 py-3 border border-[#f6921b] shadow-lg"
>
  <h1
    className="text-2xl font-bold tracking-wider text-white bangers-regular"
    style={{ textShadow: '1px 1px 2px #000000' }}
  >
    LEADERBOARD
  </h1>
</div>

                    </div>

                    {/* Leaderboard container */}
                    <div
                        className="backdrop-blur-sm bg-transaprent rounded-3xl pt-12 pb-6 px-3 border-2 border-[#f6921b] shadow-2xl"

                    >
                        <div className="space-y-2">
                            {players.map((player, index) => (
                                <div
                                    key={index}
                                    className="flex chewy-regular items-center gap-6 rounded-2xl text-black p-2 border border-[#f6921b] bg-[#f6921b]/15 transition-all duration-300"

                                >
                                    {/* Rank and Medal */}
                                    <div className="flex items-center justify-center w-12 h-12 relative">
                                        {player.medal ? (
                                            <div className="text-[2.4rem]">{player.medal}</div>
                                        ) : (
                                            <div className="text-xl font-bold">{player.rank}</div>
                                        )}
                                    </div>

                                    {/* Avatar */}
                                    <div

                                    >
                                        <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Player info */}
                                    <div className="flex-1">
                                        <div
                                            className="font-semibold text-lg mb-1"
                                            style={{
                                                color: player.rank === 1 ? "#f6921b" : "#22c55e",
                                            }}
                                        >
                                            {player.name.slice(0, 4) + "****" + player.name.slice(-2)}
                                        </div>


                                        {/* <StarRating stars={player.stars} /> */}
                                        <div className="flex items-center">
                                            <img src={Usdt} alt="USDT" className="inline-block w-6 h-6 mr-1" />
                                            <span className="text-lg"
                                            >{player.amount}</span>
                                        </div>
                                    </div>

                                    {/* Score */}
                                    <div
                                        className="text-xl pr-6 font-bold"
                                        style={{
                                            color: player.rank === 1 ? "#f6921b" : "#22c55e",textShadow: '0px 0px 1px #000000'  // green for top score
                                        }}
                                    >
                                        {player.score}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>
                    {`
                        .chewy-regular {
                          font-family: "Chewy", system-ui;
                          font-weight: 400;
                          font-style: normal;
                        }
                    `}
                </style>
            </div>
        </>
    )
}
