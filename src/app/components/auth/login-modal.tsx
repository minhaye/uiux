import { useNavigate } from "react-router";
import { X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const roles = [
    {
      id: "consultant",
      name: "Người cần tư vấn",
      description: "Nhận tư vấn sức khỏe",
      icon: "👤",
      route: "/consultant",
      color: "from-pink-500 to-rose-500",
      hoverColor: "hover:shadow-pink-500/25",
    },
    {
      id: "patient",
      name: "Bệnh nhân",
      description: "Quản lý sức khỏe cá nhân",
      icon: "🧑‍🦱",
      route: "/patient",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:shadow-blue-500/25",
    },
    {
      id: "doctor",
      name: "Bác sĩ",
      description: "Quản lý bệnh nhân & lịch khám",
      icon: "👨‍⚕️",
      route: "/doctor",
      color: "from-indigo-500 to-blue-600",
      hoverColor: "hover:shadow-indigo-500/25",
    },
    {
      id: "expert",
      name: "Chuyên gia",
      description: "Tư vấn chuyên môn",
      icon: "👨‍🏫",
      route: "/expert",
      color: "from-emerald-500 to-teal-500",
      hoverColor: "hover:shadow-emerald-500/25",
    },
    {
      id: "manager",
      name: "Quản lý",
      description: "Quản trị hệ thống",
      icon: "👨‍💼",
      route: "/manager",
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:shadow-purple-500/25",
    },
  ];

  const handleRoleSelect = (route: string) => {
    onClose();
    navigate(route);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white/80 backdrop-blur-xl border border-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100/50">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Đăng nhập hệ thống
            </h2>
            <p className="text-sm text-gray-500 mt-1">Chọn vai trò của bạn để tiếp tục</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.route)}
                className={`flex items-start p-4 bg-white/50 border border-gray-100 hover:border-transparent rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${role.hoverColor} group text-left`}
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${role.color} text-2xl shadow-inner mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {role.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {role.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {role.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
