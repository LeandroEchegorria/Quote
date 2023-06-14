import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contactanos = () => {
    const handleSubmit = (values) => {
        console.log(values);
      };

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Campo requerido';
        }

        if (!values.email) {
          errors.email = 'Campo requerido';
        }

        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <Field type="text" className="form-control" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Field type="email" className="form-control" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="text-danger" />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </Form>
    </Formik>
  )
}

export default Contactanos

