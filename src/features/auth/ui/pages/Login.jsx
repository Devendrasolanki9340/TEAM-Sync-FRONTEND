

// import { useForm } from "react-hook-form";
import { Mail, Lock, Sparkles } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";


const neuralLines = Array.from({ length: 60 }, (_, index) => {
  const angle = (index / 60) * Math.PI * 2;
  const length = 80 + ((index * 13) % 220);
  const opacity = 0.15 + ((index * 7) % 9) * 0.025;
  const cx = 260;
  const cy = 420;

  return {
    x1: cx,
    y1: cy,
    x2: cx + Math.cos(angle) * length,
    y2: cy + Math.sin(angle) * length,
    opacity,
  };
});

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.24 1.4-1.68 4.1-5.5 4.1-3.31 0-6.02-2.74-6.02-6.2S8.69 5.8 12 5.8c1.89 0 3.15.8 3.88 1.49l2.65-2.55C16.9 3.05 14.7 2 12 2 6.98 2 2.9 6.05 2.9 11s4.08 9 9.1 9c5.25 0 8.74-3.69 8.74-8.89 0-.6-.07-1.05-.15-1.5H12z"
      />
    </svg>
  );
}

function NeuralArt() {
  return (
    <svg viewBox="0 0 640 900" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="neuralGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      {neuralLines.map((line, index) => (
        <line
          key={index}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#neuralGrad)"
          strokeWidth="1"
          opacity={line.opacity}
        />
      ))}
      <circle cx="260" cy="420" r="6" fill="#c4b5fd" opacity="0.8" />
    </svg>
  );
}

const Login = () => {
    let {register, handleSubmit, onLoginSubmit,errors,isSubmitting,navigate} = useAuth();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  // } = useForm({
  //   mode: "onBlur",
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  // const submitHandler = async (data) => {
  //   console.log("Login submitted:", data);
  //   return data;
  // };

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] flex flex-col">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-linear-to-br from-[#0d1424] via-[#0a0f1e] to-[#0a0a0f] p-10">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <NeuralArt />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0a0a0f] via-transparent to-transparent" />

          <div className="relative z-10">
            <span className="text-white font-semibold text-lg tracking-tight">Synthetix AI</span>
          </div>

          <div className="relative z-10 max-w-md space-y-6">
            <div className="flex items-center gap-2 text-violet-300 text-xs font-medium tracking-wide">
              <Sparkles className="w-4 h-4" />
              <span>Next-gen intelligence</span>
            </div>
            <h1 className="text-4xl font-semibold text-white leading-tight">
              Welcome back to your workspace
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Access your team insights, automations, and secure operational dashboards in one place.
            </p>

            <div className="flex gap-10 pt-4">
              <div>
                <div className="text-2xl font-semibold text-white">24/7</div>
                <div className="text-sm text-slate-500">Support</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">99.9%</div>
                <div className="text-sm text-slate-500">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#0a0a0f] px-6 py-12 sm:px-12">
          <div className="w-full max-w-md">
            <div className="lg:hidden mb-8">
              <span className="text-white font-semibold text-lg tracking-tight">Synthetix AI</span>
            </div>

            <h2 className="text-3xl font-semibold text-white">Log in</h2>
            <p className="mt-2 text-sm text-slate-400">Sign in to continue to your dashboard.</p>

            <form onSubmit={handleSubmit(onLoginSubmit)} className="mt-8 space-y-5" noValidate>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    className={`w-full rounded-lg bg-[#111117] border py-3 pl-10 pr-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition ${
                      errors.email ? "border-red-500" : "border-white/10"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-200 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className={`w-full rounded-lg bg-[#111117] border py-3 pl-10 pr-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition ${
                      errors.password ? "border-red-500" : "border-white/10"
                    }`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Use at least 8 characters",
                      },
                    })}
                  />
                </div>
                {errors.password && <p className="mt-1.5 text-xs text-red-400">{errors.password.message}</p>}
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-400">
                  <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-[#111117] text-violet-500 focus:ring-violet-500/50" />
                  Remember me
                </label>
                <a href="#" className="text-violet-300 hover:text-violet-200">Forgot password?</a>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-linear-to-r from-violet-600 to-violet-400 py-3 text-sm font-semibold text-[#1a0b2e] hover:opacity-90 active:opacity-80 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Signing in…" : "Log In"}
              </button>
            </form>

            <div className="mt-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[11px] tracking-wide text-slate-500">OR CONTINUE WITH</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#111117] py-2.5 text-sm text-slate-200 hover:bg-white/5 transition"
              >
                <GoogleIcon className="w-4 h-4" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#111117] py-2.5 text-sm text-slate-200 hover:bg-white/5 transition"
              >
                <Sparkles className="w-4 h-4 text-violet-300" />
                SSO
              </button>
            </div>

            <p  onClick={() => navigate("/register")} className="mt-7 text-center text-sm text-slate-400">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-violet-300 hover:text-violet-200 font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* <footer className="border-t border-white/10 px-6 py-6 sm:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <span className="text-white font-semibold text-sm">Synthetix AI</span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Security</a>
            <a href="#" className="hover:text-slate-300">System Status</a>
          </div>
          <span className="text-xs text-slate-600">© 2024 Synthetix AI. Enterprise Intelligence Platforms.</span>
        </div>
      </footer> */}
    </div>
  );
};

export default Login;
