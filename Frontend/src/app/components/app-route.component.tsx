import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { DashboardSkeletonComponent } from "modules/core/components/dashboard-skeleton.component";
import { PageContainerComponent } from "modules/core/components/page-container.component";
import { MissingPage } from "modules/core/pages/missing.page";
import { AuthRouteComponent } from "./auth-route.component";
import { authRoutes, dashboardList, publicRoutes, rootRoute } from "../routes";
import { PrivateRouteComponent } from "./private-route.component";

import { IPage } from "../types";
import { PublicRouteComponent } from "./public-route.component";

export const AppRouteComponent: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRouteComponent />}>
        {publicRoutes.map((page) => {
          return (
            <Route key={page.name} path={page.link} element={page.content} />
          );
        })}
      </Route>

      {/* Auth Routes */}
      <Route element={<AuthRouteComponent />}>
        {authRoutes.map((page) => {
          return (
            <Route key={page.name} path={page.link} element={page.content} />
          );
        })}
      </Route>

      {/* Private Dashboard Routes */}
      {dashboardList.map((dashboard) => {
        return (
          <Route
            key={dashboard.dashboardName}
            element={<PrivateRouteComponent role={dashboard.dashboardName} />}
          >
            <Route
              element={<DashboardSkeletonComponent dashboard={dashboard} />}
            >
              {dashboard.pages.map((page: IPage) => {
                return (
                  <Route
                    path={page.link}
                    key={page.name}
                    element={<PageContainerComponent page={page} />}
                  />
                );
              })}
            </Route>
          </Route>
        );
      })}

      {/* Root route */}
      <Route path="/" element={<Navigate to={rootRoute} />} />

      {/* 404 Page */}
      <Route path="*" element={<MissingPage />} />
    </Routes>
  );
};
