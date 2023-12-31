import React from 'react';
import './topBrands.css';
import NextArrow from '../../common/carousel/nextArrow';
import PrewArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';





const topBrandList = [
  {
    id: 1,
    time: "35 min",
    cover:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAArlBMVEUzksz////jGDc8ls4njsotkMsPiMgkjcobi8mVwOEZisno8vlkqdZDm9B5sto1lM2iyOThACD1+v292OzW6PTI4PDiCjDiACNYotP97vBOntHiACvhABvg7faEuN2LvN/uiJT74+blK0btfovkHTz+8/Sszef62d3lMEnuhZHqZHNsrdjwkJvb6vW11Oqpzef2x8zrb3zreIPoUGP2v8XxoKn51drxoqn0s7rmPVNoXspPAAAJ+UlEQVR4nO2de3vaOBbG7Viy5AvGMTahJEAy29J2GKCddjq73/+Lre6Wb0A2zOI8Ou/TP6giwPw4r3QkS8ILQBfLA4FAIBAIBAKBQCAQCAQCgUAgEAgEAoFANxNGlCB866t4H0JeNKvyAN36Ot6DUFr4XBm59ZWMX2jBQH37xmnRW1/L2MVZffh4//TbB99fA62TQilj9dv87m4OtM5JxBVnxWh9/AS0TkmwuhOsOC0WW5v41tc0VllxJWhxJ0ZAq1ctVsqJEFt9anjQciLEVlec1cvHBitw4oB6WSknAq2m0JJ5cN5hpWIrB1qWBuIKaPUILYohVuDElrgHX/o8CLHVkfDg3SAroGXppAc1rU9Ai0t48PEkK4gtJe7Bz8PtVYPW1nFaA+3VvIMPnNjvwfnTl+9//rh/7KG1DW99xbeT8GCb1cOPz/x+xafne2i3LAlWbQ8+fPWVfvbFlqu0uAc7cTX/4Rv99dD62xdnafG4+tUKnru7x5calv+l08ozJ2YO3n3l93F+dTs9K7B8/7nNcv7R9xP3QkvEVctmPLD+sGH97FR4+Mv3p64tgyApD5ynLqy/bVjfOrDm330/dQyWYOX7X7sw/rRh/d1p0p7+7fuOrYHgrIpJyWh1YuuLDev3dpP2wAJr71abRXaMVYAIo/VHm9bDz5rV51Zaenf/L1a6dMqFgtUEeZjTem47cf7BwPrPvIdV6lTmIDwolqphxGl1RjU60/q91WI98PYsdarFojvNypOx1Xbi/On7z5eXX8/t3F7GlVusMulBKUx7nfjw+PjQ7ggFq51brKy44pLtVrsh75GDHiRZkxWnVfX0iR056MEuqyEntll9dc+DPawucqKDHpSsuinlWSc66EG69v2khxWjFfMMYtCJwoNusSIDccUl860BJz64GVdDrE460UUPboY8KDXoRAc9KOLq5AynjK2OEx30YHwmrrgw7XGig3EVR+dZcSdWbSc6yIq3V7ptx0xD9TpOFB5cODV/RSPDCsdBmgZxAxcmcRwT+eemE0VcucdKeZAu9nxSb5Va25fo4rBKVtul8FrDiffPTrJS/SCJ9HxxbmjRoyo6iiLLiY56UMUVT+G11goCOZiiraSlnXjvHivEACUqv6L2TS7ZSCGLn1rDgEMRWw560AsLk4uitQ1LhhZP243U/UAZW+7FlYfT+taV5TimAzcdntpFvs4uOC33WHlo4xc6pSQzG0wlipcNWAuVUggnOsfKwzsTLx7ZNiKLw8KTBqylfhafaHaOFWuUGBa1ZhbtbDCyNaeJVVTofIK4yYr7UGVQDJxFRi1II7kF66gMi/ZusmKxczC08KIGo5ZYYa8GmHhyyEMYq6WTrBQt6USUajDmuAZsmvhiIvkRZ+OKK6xjC5F8XxTJwbobhgKRJxRbNRmBHI4rrnirxzKMBfWmiNqzDpgG2TrFRMXVirFyav6qLbqt+0SvO52FEdKFzIOF26yYEzmtCxY3Mg/WC2ycVXxUA5yTQitgxcWnrQ5ndnTxuHK5ba8VHs85EUNcGZ1zIgFWlujJ2OJxBR6sJZ04sDIE4qqlmA2bZ31OxDgBVm1RTqvrRAwe7FMoaLWciKUHCZwQ3JJ0YvOONPdgQIL8sIXoaoo7sbJjC09Fe7WsNllauraT8Jx4n2jFlmJFZl6ZJ9MSjiVtSsQW0TdyOKsAeagKq101PUwgtJoStGRs4UDlDKgMq9khrABWW7GmpTzIimi5Y6jSleNzWX0StAihuNAbLvCk2K635jYryBJ3YhLlRZ2342BbHSCJ7xVfkctU1gtNMaEE4qpfCG+OeTowrAa1hBEMb0AgEAgEAr1BLJl4dVrK10n8IxczciFvc9i87tfUMEmjbOw/wMa+z4au8eWqn1N7zRlG2Cvr5aljFV7mka2MJeNvflG1/6LwLiev1suPe64CmQ1LWuX6raM8s/9ifTF3s+WgGvMsWBeW7yeLt02fm9fML4el14oXYz7Xrg+W72/eRMuskt9d7mikv6j3B8uP3kQrlIu8XzOxrFfRH96bDbma3dLgXujGLmnzGAcrzmp6qnK7iGxWvAuVJyae2n19Qw3BKuqr5ZNVGNczVphQLsR/yBfzRctYFPIkFKlMlIbL3TIUW3pEXVZFVsCNVJXUz2f/iX25bhxRJGrS0eWoBtZsl2XZujK0zIYSuq6Yq4oywupsv+Aw48oIiXhuVMxYhoBwzgOjkM9CrAb7tyEeXoi6s5QGWx5tRWU6D0wnoiiZpbKdSsTqS/V+rLxaEzouXHXPRVlGSujS7CmRnyDOirrZlxvF1d6KKtV/KSZ1LbHVVW0QS5DZPnbY1K+iNrTgehteyTN3lJcL4pFd/X7sGzt7gMT/VTUsGUnI7IQTSVJ8tC5dLsjSsKytTqW147eiDVh5p7LMO/ltRku83+R+bOwd9l+X1/7zasMSd7YkGWL9R5eFNawhLRuwjt0KHCdfbtN8lmzYvaJZXI6qc+zA0p/U39MeLizczsFiQXIals+Ix1WrTG5QbAfWyI4T7sAyX25CPLpqf86EdYxnYGUXwOp5jYi7HqlILpeTZVaOLuvqwppqWNhskyuzTO8gXyPzQZNsYTbhV7uFxtKEpX28Wqc77bzQo7pxn2V5YSrXo8oyW9IwTKuRZVtdWIFmgUxXFiIUq48xo6aBDwmOVY0yRDjcn4DFKxC9HzH0YkVoESNK1WO+6Mbe81lUUTCyG7cdWGbKYE/1tEnAy9VG3yTWsMrYGqTQepKlFxavYAweekSVxtYbijFD43AI9tWMGxYm2ixHQuWVJ8IM6nSCooZFL4F1tGBpg1NdYSOO+1bRJBotb9LsDse1bqkJC6O6m1qIg3dMZIWr68HCWD4Q2zz1HIWEhaeNIyPqTnoMMrCikMasPTL93yo2zfAhRjjOdPE1IiuUD4oJZV+Peku1YJeEk6isw2tUUzYGVrLf71eWB1i6ZJqvapfqXm1LrgGLqs6gyBeZtr06Pinap2EYLtNclY/p19eGZh345olOPs008a4Bq3nwj3xDOWTkT02iRRyG63cDayUb9bxdXpGrwPJIa7QjM4c6sy8KnX6N0oYNJSob7KTwrPwqsFA7hT/2D3dG2sDbmtVX2DCi2MF0FVjiZFj7HWUA6bbMKBnVfcQeWKtdPZ2JA+vyV2I/Th+s2TlYszYsj1gTZWam0Vs2B9j79sz0bdVuasstG4JYf8d0raxYRIrhsv78+tk8R9JcUqxvApbEfBciidLTMjKK0FSPN0vr1htdbk1zVmUjG+54KLQVd5cZo3CxifLNIjQMY1FVNjLiscRL5CvwIV5dQ7684i+LdZONKc02ebRunTpCYpKtN5t1GtJRefBC4WutgegIIdL3yldbdAECgUAgEAgEAoFAIBAIBAKBQCDQ/6gAdLH+CzGitAWmM0ArAAAAAElFTkSuQmCC",
    name: "Dominos",
  },

  {
    id: 2,
    time: "40 min",
    cover:
      "https://cdn.logojoy.com/wp-content/uploads/2018/05/01105934/1855-768x591.png",
    name: "Burger King",
  },
  {
    id: 3,
    time: "40 min",
    cover:
      "https://cdn.logojoy.com/wp-content/uploads/2018/05/01110016/6105-768x591.png",
    name: "Nescafe",
  },
  {
    id: 4,
    time: "15 min",
    cover:
      "https://cdn.logojoy.com/wp-content/uploads/2018/05/01105913/1355.png",
    name: "Mcdonalds",
  },
  {
    id: 5,
    time: "10 min",
    cover:
      "https://w7.pngwing.com/pngs/383/473/png-transparent-lay-s-potato-chip-frito-lay-fritos-pepsico-honey-food-trademark-logo.png",
    name: "Lays",
  },
  {
    id: 6,
    time: "50 min",
    cover:
      "https://www.haldirams.com/media/wysiwyg/Contact_Us_Main_Banner_mobile.jpg",
    name: "Haldirams",
  },
  {
    id: 7,
    time: "23 min",
    cover:
      "https://c0.klipartz.com/pngpicture/148/673/gratis-png-ilustracion-euclidiana-hebilla-de-trigo-marca-creativa-hd.png",
    name: "Barley",
  },
];


const settings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrewArrow />,
};


const TopBrands
 = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top Brands For You</div>
      <Slider {...settings}>
        {topBrandList.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img
                  src={brand.cover}
                  className="top-brands-image"
                  alt={brand.name}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default TopBrands;
