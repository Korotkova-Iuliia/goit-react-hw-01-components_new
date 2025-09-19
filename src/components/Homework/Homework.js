export default function Homework() {
  return <div>Homework</div>;
}
function getShippingCost(country) {
  let price;
  let message = `Shipping to ${country} will cost ${price} credits`;

  // Change code below this line
  switch (country) {
    case 'China':
      price = '100 кредитів';
      break;
    case 'Chile':
      price = '250 кредитів';
      break;
    case 'Australia':
      price = '170 кредитів';
      break;
    case 'Jamaica':
      price = '120 кредитів';
      break;
    default:
      message = 'Sorry, there is no delivery to your country';
  }

  // Change code above this line
  return message;
}
getShippingCost('Germany');

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}
getSubstring('Hello world', 3);
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    result = message;
    console.log(result);
  } else {
    result = message.slice(0, maxLength) + '...';
  }
  /// Change code above this line
  return result;
}
formatMessage('Curabitur ligula sapien, tincidunt non.', 4);
formatMessage('Vestibulum facilisis, purus nec pulvinar iaculis.', 20);
formatMessage('Curabitur ligula sapien.', 16);
formatMessage(
  'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  15
);
function checkForSpam(message) {
  let result;
  // Change code below this line
  const messageToLowercase = message.toLowerCase();
  result =
    messageToLowercase.includes('spam') || messageToLowercase.includes('sale');
  // Change code above this line
  return result;
}
checkForSpam('Latest technology news');
checkForSpam('JavaScript weekly newsletter');
checkForSpam('Get best sale offers now!');
checkForSpam('Amazing SalE, only tonight!');

function getExtremeElements(numbers) {
  // Change code below this line
  const threshold = 15;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < threshold) {
      continue;
    }

    console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
  }
}
getExtremeElements([1, 3, 14, 18, 4, 7, 29, 6, 34]);

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};
console.log(Object.values(book));

for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[numberOfTags - 1];
// Change code above this line
console.log(ownerName);
console.log(ownerPhone);
console.log(ownerEmail);
console.log(numberOfTags);
console.log(firstTag);
console.log(lastTag);
console.log(apartment);
