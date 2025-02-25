// utills.js
interface Person{
    name: string;
    imageId: string;
}

export function getImageUrl(person: Person, size: string) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
}

interface AProps{
    person: Person;
    size: number
}
  
function Avatar({ person, size }: AProps) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size < 90 ? 's' : 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}