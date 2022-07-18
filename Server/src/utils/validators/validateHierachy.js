export const validateHierachy = async (args) => {
  const errors = {}
  const {
    name,
    description,
    parentId,
    status,
    afectaOp,
    childrenIds
  } = args
  if (!name) {
    errors.name = 'El nombre es requerido'
  }
  if (!description) {
    errors.description = 'La descripción es requerida'
  }
  if (parentId) {
    const parent = await Hierachy.findOne(parentId)
    if (!parent) {
      errors.parentId = 'El padre no existe'
    }
  }
  if (childrenIds) {
    const children = await Hierachy.findManyById(childrenIds)
    if (!children) {
      errors.childrenIds = 'Los hijos no existen'
    }
  }
  if (!status) {
    errors.status = 'El estado es requerido'
  }
  if (!afectaOp) {
    errors.afectaOp = 'La afectación al operador es requerida'
  }
  const isValid = Object.keys(errors).length === 0
  return { isValid, errors }
}
