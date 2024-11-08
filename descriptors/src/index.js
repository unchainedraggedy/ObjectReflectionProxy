export default function descript({ special }) {
  return special.map(({
    id, name, icon, description,
  }) => ({
    id,
    icon,
    description: description || 'Описание недоступно',
  }));
}
