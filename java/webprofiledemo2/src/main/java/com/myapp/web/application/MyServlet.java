package com.myapp.web.application;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/home")
public class MyServlet extends HttpServlet {


   private static final long serialVersionUID = 1L;

   @Override
   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
				// PrintWriter out = resp.getWriter();

				// out.write("<html>");
				// out.write("<body>");
				// out.write("<h1>Welcome To World Of Servlets</h1>");
				// out.write("</body>");
				// out.write("</html>");

        // getServletContext().setAttribute("message", "Welcome To World OF Servlets");
        // getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);

        req.setAttribute("message", "Welcome To World OF Servlets");
        req.getRequestDispatcher("/index.jsp").forward(req, resp);

   }

}
