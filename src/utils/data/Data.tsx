export const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Savings",
        data: [
          4311000, 458000, 664000, 7666000, 665000, 890000, 9100000, 620000,
          5110000, 380000, 2140000, 9122000,
        ],
        borderColor: "#7838D6",
        backgroundColor: "#7838D6",
      },
    ],
  };



export const options = {
    scales: {
      y: {
        suggestedMin: 30000, // Set your minimum value
        suggestedMax: 150000, // Set your maximum value
      },
    },
  };



