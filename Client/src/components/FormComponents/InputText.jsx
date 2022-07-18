import { ErrorMessage, useField } from "formik"

const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="mb-6">
      <label className="block">
        <span className="block text-sm font-medium text-slate-700">{label}</span>
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          {...field}
          {...props}
        />
      </label>
      {
        meta.error && meta.touched
          ? <ErrorMessage
            className='ml-2 mt-2 text-sm italic text-red-500'
            name={props.name}
            component='div'
          />
          : null
      }
    </div>
  )
}

export default InputText