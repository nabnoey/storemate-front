// main.tsx
import { StrictMode, useEffect } from 'react' 
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router'
import { store } from './redux/store'
import { Provider, useDispatch } from 'react-redux' 
import { RouterProvider } from 'react-router-dom'
import Loading from "./components/Loading";
import { stopLoading } from './redux/loading/loadingReducer' 

// --- สร้าง Component เพื่อจัดการ Logic ตอนเปิดเว็บ ---
export default function AppInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // ตั้งเวลาโหลดเทียมๆ 1.5 วินาที (หรือจะใส่ Logic เช็ค User API ตรงนี้ก็ได้)
    const timer = setTimeout(() => {
      dispatch(stopLoading());
    }, 1500);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return <>{children}</>;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* เรียกใช้ AppInitializer ด้านใน Provider */}
      <AppInitializer>
        <Loading />
        <RouterProvider router={router} />
      </AppInitializer>
    </Provider>
  </StrictMode>
)
