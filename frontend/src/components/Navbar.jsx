import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./ui/Button";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const userRoles = currentUser?.roles || [];
  const showModeratorBoard = userRoles.includes("ROLE_MODERATOR");
  const showAdminBoard = userRoles.includes("ROLE_ADMIN");

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, #0284c7, #0369a1)',
              boxShadow: '0 2px 10px rgba(2, 132, 199, 0.3)'
            }}>
              <img 
                src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" 
                alt="JWT Logo" 
                className="w-6 h-6"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <span>AuthJWT</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {showModeratorBoard && (
              <Link
                to="/mod"
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors relative group"
              >
                Panel de Moderador
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            )}
            {showAdminBoard && (
              <Link
                to="/admin"
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors relative group"
              >
                Panel de Administrador
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            )}
            {currentUser && (
              <Link
                to="/user"
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors relative group"
              >
                Panel de Usuario
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            )}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <div className="hidden sm:flex items-center space-x-3">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{currentUser.username}</p>
                    <p className="text-xs text-gray-500 capitalize">
                      {userRoles.length > 0 ? userRoles[0].replace('ROLE_', '').toLowerCase() : 'user'}
                    </p>
                  </div>
                  <Link
                    to="/profile"
                    className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-primary-700 font-medium text-sm hover:from-primary-200 hover:to-primary-300 transition-all"
                  >
                    {currentUser.username?.charAt(0).toUpperCase()}
                  </Link>
                </div>
                <Button
                  onClick={handleLogout}
                  variant="destructive"
                  size="sm"
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">
                    Registrarse
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
