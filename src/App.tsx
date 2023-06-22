import { Routes, Route } from 'react-router-dom'
import Public from './components/authComponents/Public'
import Login from './features/auth/Login';
import Layout from './components/Layout'
import DashLayout from './components/dashComponents/DashLayout'
import Events from './features/events/Events'
import EventDetails from './features/events/EventDetails'
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          <Route path="dashboard" element={<DashLayout />}>

            <Route path="events">
              <Route index element={<Events />} />
              <Route path=":eventId" element={<EventDetails />} />
            </Route>

          </Route>{/* End Dash */}
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
