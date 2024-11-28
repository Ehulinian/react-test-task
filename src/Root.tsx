import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RecipeDetail } from "./pages/RecipeDetail/RecipeDetail";
import { Recipes } from "./pages/Recipes";
import { MealsProvider } from "./store/MealsProvider";
import { FavoritesPage } from "./pages/FavoritesPage";

const queryClient = new QueryClient();

const Root = () => (
  <Router>
    <QueryClientProvider client={queryClient}>
      <MealsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Recipes />} />

            <Route path="/recipe/:id" element={<RecipeDetail />} />

            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MealsProvider>
    </QueryClientProvider>
  </Router>
);

export default Root;
