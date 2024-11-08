export default function descript({ special }) {
  return special.map(({
    id, icon, description,
  }) => ({
    id,
    icon,
    description: description || 'Описание недоступно',
  }));
}
