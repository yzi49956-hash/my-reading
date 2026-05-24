export default function ArchivePage() {
return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-neutral-500 tracking-[0.4em] uppercase text-xs mb-8">
          PRIVATE ARCHIVE
        </p>

        <h1 className="text-6xl md:text-8xl font-light mb-20">
          阅读目录
        </h1>

        <div className="space-y-10">
          <a
            href="/second-guest"
            className="group block border-b border-neutral-900 pb-8 hover:border-neutral-600 transition-all"
          >
            <div className="flex items-start gap-6">
              <span className="text-neutral-600 text-sm mt-2">
                [01]
              </span>

              <div>
                <h2 className="text-3xl font-light group-hover:translate-x-2 transition-transform duration-300">
                  房间里的第二个人
                </h2>

                <p className="text-neutral-500 mt-3 group-hover:text-neutral-300 transition-colors">
                  天上的乌云压得很低很低，窗外的风咆哮着，吼叫着，似乎要席卷一切。
                </p>
              </div>
            </div>
          </a>

         <a
            href="/last-seen"
            className="group block border-b border-neutral-900 pb-8 hover:border-neutral-600 transition-all"
          >
            <div className="flex items-start gap-6">
              <span className="text-neutral-600 text-sm mt-2">
                [02]
              </span>

              <div>
                <h2 className="text-3xl font-light group-hover:translate-x-2 transition-transform duration-300">
                  我的网恋对象好像不是人
                </h2>

                <p className="text-neutral-500 mt-3 group-hover:text-neutral-300 transition-colors">
                  又是一个安静的晚上，我百无聊赖的打开了小地瓜。
                </p>
              </div>
            </div>
          </a>

<a
            href="/unsent"
            className="group block border-b border-neutral-900 pb-8 hover:border-neutral-600 transition-all"
          >
            <div className="flex items-start gap-6">
              <span className="text-neutral-600 text-sm mt-2">
                [03]
              </span>

              <div>
                <h2 className="text-3xl font-light group-hover:translate-x-2 transition-transform duration-300">
                  她把那句话删掉了
                </h2>

                <p className="text-neutral-500 mt-3 group-hover:text-neutral-300 transition-colors">
                  一个想说“我能当你最好的朋友吗”，一个想说“我爱你”。
                </p>
              </div>
            </div>
          </a>

<a
            href="/stay"
            className="group block border-b border-neutral-900 pb-8 hover:border-neutral-600 transition-all"
          >
            <div className="flex items-start gap-6">
              <span className="text-neutral-600 text-sm mt-2">
                [04]
              </span>

              <div>
                <h2 className="text-3xl font-light group-hover:translate-x-2 transition-transform duration-300">
                 边界与留下
                </h2>

                <p className="text-neutral-500 mt-3 group-hover:text-neutral-300 transition-colors">
                  向笛第一次要求进她房间要敲门时，温岭正在厨房切西红柿。
                </p>
              </div>
            </div>
          </a>

<a
            href="/escape"
            className="group block border-b border-neutral-900 pb-8 hover:border-neutral-600 transition-all"
          >
            <div className="flex items-start gap-6">
              <span className="text-neutral-600 text-sm mt-2">
                [05]
              </span>

              <div>
                <h2 className="text-3xl font-light group-hover:translate-x-2 transition-transform duration-300">
                 无尽逃亡
                </h2>

                <p className="text-neutral-500 mt-3 group-hover:text-neutral-300 transition-colors">
                  沈之玟拼命地向前狂奔着，左转，向右，向上跳，滑铲。
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}